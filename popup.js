// Popup script for GitHub Copilot Sidebar Extension

document.addEventListener('DOMContentLoaded', function() {
    // Toggle Sidebar button
    document.getElementById('toggle-sidebar').addEventListener('click', function() {
        // Send message to content script to toggle sidebar
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            const currentTab = tabs[0];
            
            // Check if we're on a GitHub page
            if (currentTab.url && currentTab.url.includes('github.com')) {
                chrome.tabs.sendMessage(currentTab.id, { action: 'toggleSidebar' }, function(response) {
                    if (chrome.runtime.lastError) {
                        console.error('Error:', chrome.runtime.lastError.message);
                        // If content script isn't loaded, show message
                        showMessage('Please refresh the GitHub page and try again.');
                    } else if (response && response.success) {
                        window.close(); // Close popup after successful toggle
                    }
                });
            } else {
                showMessage('Please navigate to a GitHub page first.');
            }
        });
    });
    
    // Open Copilot Chat button
    document.getElementById('open-copilot').addEventListener('click', function() {
        chrome.tabs.create({ url: 'https://github.com/copilot' });
        window.close();
    });
    
    // Extension Settings button
    document.getElementById('open-settings').addEventListener('click', function() {
        chrome.tabs.create({ url: 'https://github.com/settings/copilot' });
        window.close();
    });
    
    function showMessage(text) {
        const info = document.querySelector('.popup-info p');
        const originalText = info.textContent;
        info.textContent = text;
        info.style.color = '#f85149';
        
        setTimeout(() => {
            info.textContent = originalText;
            info.style.color = '#8b949e';
        }, 3000);
    }
});