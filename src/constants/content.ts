/**
 * @description Content constants for the PolyCrawl-Service-Copilot landing page.
 * This file centralizes all text and data to facilitate Builder.io integration.
 */

export const APP_CONTENT = {
  hero: {
    title: "PolyCrawl Service Copilot",
    subtitle: "The Intelligent Bridge for Infrastructure & Code",
    description: "A robust, Go-based CLI that acts as a Model Context Protocol (MCP) server. It serves as an intelligent bridge between Local IDEs, LLMs, and specialized PolyCrawl infrastructure.",
    cta: "Get Started",
    secondaryCta: "View Docs",
  },
  features: [
    {
      id: "01",
      title: "Native MCP Server",
      description: "Implements JSON-RPC 2.0 over Stdio to communicate with IDE clients directly in Go.",
      icon: "Terminal",
    },
    {
      id: "02",
      title: "Hybrid-Context Engine",
      description: "Indexes local Go/Python source code and remote K8s state into a local Vector Database for RAG-based generation.",
      icon: "Database",
    },
    {
      id: "03",
      title: "Direct K8s Introspection",
      description: "Utilizes client-go to query pod health, logs, and services directly, bypassing shell subprocess overhead.",
      icon: "Cloud",
    },
    {
      id: "04",
      title: "Polyglot AST Parsing",
      description: "Integrates Tree-sitter bindings to parses Go and Python ASTs for structural refactoring suggestions.",
      icon: "Code2",
    },
    {
      id: "05",
      title: "Secure Air-Gap Mode",
      description: "Configurable switch to route inference to local Llama 3 models or proxy via a corporate gateway.",
      icon: "ShieldCheck",
    },
    {
      id: "06",
      title: "LSP Integration Hooks",
      description: "Interacts with gopls and pyright outputs to auto-generate fix patches for diagnostic errors.",
      icon: "Zap",
    },
  ],
  architecture: {
    title: "Hexagonal Architecture",
    description: "The application follows a Ports and Adapters pattern. The 'Core' domain contains logic for Code Analysis, K8s Diagnostics, and Prompt Engineering. 'Adapters' handle communication with LLM providers, Vector Stores, and the Kubernetes API.",
    points: [
      "Core Domain: Code Analysis & K8s Diagnostics",
      "Adapters: LLM, Vector DB, K8s API",
      "Primary Port: MCP Server (Stdin/Stdout)",
      "Background Workers: Non-blocking indexing",
    ],
  },
  performance: {
    title: "Performance Strategy",
    metrics: [
      { label: "Tool Response", value: "< 200ms" },
      { label: "Indexing Speed", value: "50k LOC / 30s" },
      { label: "Idle Memory", value: "< 200MB" },
    ],
  },
  stack: [
    "github.com/spf13/cobra",
    "github.com/spf13/viper",
    "k8s.io/client-go",
    "github.com/sashabaranov/go-openai",
    "github.com/smacker/go-tree-sitter",
    "github.com/chroma-core/chroma-go",
    "github.com/sourcegraph/jsonrpc2",
  ],
  codeSnippets: [
    {
      title: "CLI Entry Point",
      language: "go",
      code: `package main

import (
	"context"
	"os"

	"github.com/spf13/cobra"
	"polycrawl-copilot/internal/config"
	"polycrawl-copilot/internal/mcp"
	"polycrawl-copilot/pkg/logger"
)

var rootCmd = &cobra.Command{
	Use:   "polycrawl-copilot",
	Short: "MCP Server for PolyCrawl Infrastructure",
	Run: func(cmd *cobra.Command, args []string) {
		cfg, _ := config.Load()
		server := mcp.NewServer(cfg, os.Stdin, os.Stdout)
		server.Serve(context.Background())
	},
}`,
    },
    {
      title: "K8s Tool Implementation",
      language: "go",
      code: `func (i *Inspector) CheckCrawlerHealth(ctx context.Context, ns string) (string, error) {
	pods, err := i.clientset.CoreV1().Pods(ns).List(ctx, metav1.ListOptions{
		LabelSelector: "app=crawler-worker",
	})
	if err != nil {
		return "", err
	}
	return fmt.Sprintf("Total Workers: %d", len(pods.Items)), nil
}`,
    },
  ],
};
