// GitHub Copilot Sidebar Content Script
(function() {
    'use strict';
    
    let sidebarVisible = false;
    let sidebarContainer = null;
    
    // Create and inject the sidebar
    function createSidebar() {
        if (sidebarContainer) return;
        
        // Create sidebar container
        sidebarContainer = document.createElement('div');
        sidebarContainer.id = 'github-copilot-sidebar';
        sidebarContainer.className = 'copilot-sidebar-container';
        
        // Create sidebar content
        sidebarContainer.innerHTML = `
            <div class="copilot-sidebar">
                <div class="copilot-header">
                    <div class="copilot-logo">🤖</div>
                    <h3>GitHub Copilot</h3>
                    <button class="copilot-close" id="copilot-close-btn">×</button>
                </div>
                <div class="copilot-content">
                    <div class="copilot-welcome">
                        <p>Welcome to GitHub Copilot Sidebar!</p>
                        <p>This extension provides quick access to AI assistance while browsing GitHub.</p>
                    </div>
                    <div class="copilot-actions">
                        <button class="copilot-btn primary" onclick="openCopilotChat()">
                            💬 Open Copilot Chat
                        </button>
                        <button class="copilot-btn" onclick="openCopilotDocs()">
                            📚 Documentation
                        </button>
                        <button class="copilot-btn" onclick="openCopilotSettings()">
                            ⚙️ Settings
                        </button>
                    </div>
                    <div class="copilot-quick-actions">
                        <h4>Quick Actions</h4>
                        <button class="copilot-btn small" onclick="explainCode()">
                            🔍 Explain Code
                        </button>
                        <button class="copilot-btn small" onclick="generateTests()">
                            🧪 Generate Tests
                        </button>
                        <button class="copilot-btn small" onclick="improveCode()">
                            ✨ Improve Code
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        // Add event listeners
        setupEventListeners();
        
        // Inject into page
        document.body.appendChild(sidebarContainer);
        
        // Adjust GitHub layout
        adjustGitHubLayout(true);
    }
    
    function setupEventListeners() {
        // Close button
        const closeBtn = sidebarContainer.querySelector('#copilot-close-btn');
        closeBtn.addEventListener('click', toggleSidebar);
        
        // Make functions globally available for onclick handlers
        window.openCopilotChat = () => {
            window.open('https://github.com/copilot', '_blank');
        };
        
        window.openCopilotDocs = () => {
            window.open('https://docs.github.com/en/copilot', '_blank');
        };
        
        window.openCopilotSettings = () => {
            window.open('https://github.com/settings/copilot', '_blank');
        };
        
        window.explainCode = () => {
            const selectedCode = window.getSelection().toString();
            if (selectedCode) {
                const message = `Please explain this code:\\n\\n${selectedCode}`;
                window.open(`https://github.com/copilot?q=${encodeURIComponent(message)}`, '_blank');
            } else {
                alert('Please select some code first!');
            }
        };
        
        window.generateTests = () => {
            const selectedCode = window.getSelection().toString();
            if (selectedCode) {
                const message = `Generate unit tests for this code:\\n\\n${selectedCode}`;
                window.open(`https://github.com/copilot?q=${encodeURIComponent(message)}`, '_blank');
            } else {
                alert('Please select some code first!');
            }
        };
        
        window.improveCode = () => {
            const selectedCode = window.getSelection().toString();
            if (selectedCode) {
                const message = `How can I improve this code:\\n\\n${selectedCode}`;
                window.open(`https://github.com/copilot?q=${encodeURIComponent(message)}`, '_blank');
            } else {
                alert('Please select some code first!');
            }
        };
    }
    
    function toggleSidebar() {
        if (!sidebarContainer) {
            createSidebar();
        }
        
        sidebarVisible = !sidebarVisible;
        
        if (sidebarVisible) {
            sidebarContainer.classList.add('visible');
            adjustGitHubLayout(true);
        } else {
            sidebarContainer.classList.remove('visible');
            adjustGitHubLayout(false);
        }
        
        // Store state
        chrome.storage.local.set({ sidebarVisible });
    }
    
    function adjustGitHubLayout(sidebarOpen) {
        const body = document.body;
        if (sidebarOpen) {
            body.style.marginRight = '320px';
            body.style.transition = 'margin-right 0.3s ease';
        } else {
            body.style.marginRight = '0';
        }
    }
    
    // Listen for messages from popup/extension
    chrome.runtime.onMessage?.addListener((request, sender, sendResponse) => {
        if (request.action === 'toggleSidebar') {
            toggleSidebar();
            sendResponse({ success: true });
        }
    });
    
    // Create toggle button
    function createToggleButton() {
        const toggleBtn = document.createElement('button');
        toggleBtn.id = 'copilot-toggle-btn';
        toggleBtn.className = 'copilot-toggle-button';
        toggleBtn.innerHTML = '🤖';
        toggleBtn.title = 'Toggle GitHub Copilot Sidebar';
        toggleBtn.addEventListener('click', toggleSidebar);
        
        // Position the button
        toggleBtn.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 10001;
            width: 50px;
            height: 50px;
            border: none;
            border-radius: 25px;
            background: #7c3aed;
            color: white;
            font-size: 20px;
            cursor: pointer;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            transition: all 0.3s ease;
        `;
        
        document.body.appendChild(toggleBtn);
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
    function init() {
        // Only run on GitHub pages
        if (!window.location.hostname.includes('github.com')) return;
        
        // Create toggle button
        createToggleButton();
        
        // Restore sidebar state
        chrome.storage.local.get(['sidebarVisible'], (result) => {
            if (result.sidebarVisible) {
                toggleSidebar();
            }
        });
    }
})();