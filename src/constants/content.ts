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
  mcpTools: {
    title: "Standardized MCP Tools",
    description: "Native Go implementations of Model Context Protocol tools, providing deep introspection into your infrastructure with type-safe execution.",
    tools: [
      {
        name: "get_k8s_context",
        description: "Programmatically retrieves active kubeconfig context, cluster endpoints, and namespace isolation details using client-go.",
        icon: "Cloud"
      },
      {
        name: "check_crawler_health",
        description: "Queries pod status and restart counts for specialized crawler workers across namespaces.",
        icon: "Activity"
      }
    ]
  },
  devTools: {
    title: "Internal Dev Utilities",
    description: "A comprehensive suite of Go-native instruments designed to accelerate the development lifecycle of the PolyCrawl ecosystem.",
    modules: [
      {
        title: "Observability & Debugging",
        description: "Structured logging with trace-id propagation and real-time debug snapshots of the MCP RPC loop.",
        icon: "SearchCode"
      },
      {
        title: "Performance Profiling",
        description: "High-resolution latency tracking for tool execution and concurrent indexing memory pressure monitors.",
        icon: "Gauge"
      },
      {
        title: "AST Analysis Instruments",
        description: "Tree-sitter based code scanners that enforce PolyCrawl-specific architectural constraints.",
        icon: "Binary"
      },
      {
        title: "Automation Engine",
        description: "Go-native task runners for repository indexing, K8s mock injection, and protocol compliance testing.",
        icon: "Wrench"
      }
    ]
  },
  configStrategy: {
    title: "Dynamic Configuration",
    description: "Utilizing Viper for multi-source configuration (YAML, Environment Variables, Flags) and a factory-based LLM client for provider-agnostic inference.",
    benefits: [
      { title: "Security", description: "API keys are handled via environment variables (POLYCRAWL_LLM_APIKEY), avoiding hardcoded secrets." },
      { title: "Air-Gap Support", description: "Seamlessly switch to local Llama 3 via Ollama or vLLM endpoints for secure environments." },
      { title: "Extensibility", description: "Easily add new providers like Google Gemini by implementing the LLMClient interface." },
    ]
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
      title: "Unit Test: MCP Protocol",
      language: "go",
      code: `func TestMCPProtocolCompliance(t *testing.T) {
	// 1. Setup in/out pipes for full-duplex communication
	serverIn, clientOut := io.Pipe()
	clientIn, serverOut := io.Pipe()

	// 2. Initialize the server
	cfg := &mcp.Config{
		Name:    "K8s-Tool-Server",
		Version: "1.0.0",
	}
	server := mcp.NewServer(cfg, serverIn, serverOut)
	
	// Start server in a goroutine
	go func() {
		if err := server.Serve(); err != nil && err != io.EOF {
			t.Errorf("Server exited with error: %v", err)
		}
	}()

	// 3. Simulate JSON-RPC "list_tools" request
	req := \`{"jsonrpc":"2.0","method":"list_tools","id":1}\` + "\n"
	
	go func() {
		_, _ = clientOut.Write([]byte(req))
	}()

	// 4. Read and Verify Response
	resp := make([]byte, 2048)
	n, err := clientIn.Read(resp)
	if err != nil {
		t.Fatalf("Failed to read response: %v", err)
	}

	responseBody := string(resp[:n])
	
	// Assertions
	assert.Contains(t, responseBody, "get_k8s_context")
	assert.Contains(t, responseBody, \`"id":1\`)
	assert.Contains(t, responseBody, \`"result"\`)
}`,
    },
    {
      title: "Performance Monitor",
      language: "go",
      code: `func (m *Monitor) TrackExecution(name string) func() {
	start := time.Now()
	return func() {
		duration := time.Since(start)
		m.logger.Debug("tool_execution",
			zap.String("tool", name),
			zap.Duration("latency", duration),
		)
		if duration > 200*time.Millisecond {
			m.metrics.IncSlowExecution(name)
		}
	}
}`,
    },
    {
      title: "Tool: get_k8s_context",
      language: "go",
      code: `func (i *Inspector) GetK8sContext(ctx context.Context) (*ContextInfo, error) {
	rawConfig, err := i.clientConfig.RawConfig()
	if err != nil {
		return nil, fmt.Errorf("missing kubeconfig: %w", err)
	}

	currCtx := rawConfig.CurrentContext
	context, ok := rawConfig.Contexts[currCtx]
	if !ok {
		return nil, fmt.Errorf("invalid context: %s", currCtx)
	}

	cluster := rawConfig.Clusters[context.Cluster]
	return &ContextInfo{
		ContextName:    currCtx,
		ClusterName:    context.Cluster,
		ServerURL:      cluster.Server,
		Namespace:      context.Namespace,
		AuthMethod:     context.AuthInfo,
	}, nil
}`,
    },
    {
      title: "LLM Factory Pattern",
      language: "go",
      code: `type LLMClient interface {
	Completion(ctx context.Context, prompt string) (string, error)
}

func NewClient(cfg config.LLMConfig) (LLMClient, error) {
	switch cfg.Provider {
	case "openai":
		return NewOpenAIClient(cfg.APIKey, cfg.Model), nil
	case "local":
		// Supports Llama 3 via local Ollama/vLLM
		return NewLocalClient(cfg.Endpoint, cfg.Model), nil
	default:
		return nil, fmt.Errorf("unsupported: %s", cfg.Provider)
	}
}`,
    },
    {
      title: "Configuration (Viper)",
      language: "go",
      code: `func Load() (*Settings, error) {
	viper.SetConfigName("config")
	viper.SetEnvPrefix("POLYCRAWL")
	viper.AutomaticEnv() // e.g. POLYCRAWL_LLM_APIKEY
	
	var s Settings
	if err := viper.ReadInConfig(); err != nil {
		return nil, err
	}
	err := viper.Unmarshal(&s)
	return &s, err
}`,
    },
  ],
};
