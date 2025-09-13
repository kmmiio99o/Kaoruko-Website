import React, { useState } from 'react';
import './Commands.css';

const Commands: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const commandCategories = [
    { id: 'all', name: 'All Commands', icon: '📋' },
    { id: 'administration', name: 'Administration', icon: '⚙️' },
    { id: 'entertainment', name: 'Entertainment', icon: '🎮' },
    { id: 'information', name: 'Information', icon: 'ℹ️' },
    { id: 'moderation', name: 'Moderation', icon: '🛡️' },
    { id: 'utility', name: 'Utility', icon: '🔧' }
  ];

  const commands = [
    // ADMINISTRATION
    {
      name: 'eval',
      description: 'Execute JavaScript code (Owner restricted)',
      usage: '/eval <code>',
      category: 'administration',
      permissions: ['Owner Only']
    },
    // ENTERTAINMENT
    {
      name: '8ball',
      description: 'Consult the magic 8-ball for answers to your questions',
      usage: '/8ball <question>',
      category: 'entertainment',
      permissions: []
    },
    // INFORMATION
    {
      name: 'help',
      description: 'Display help information about available commands',
      usage: '/help [command]',
      category: 'information',
      permissions: []
    },
    // MODERATION
    {
      name: 'ban',
      description: 'Remove a user from the server permanently',
      usage: '/ban <user> [reason]',
      category: 'moderation',
      permissions: ['Ban Members']
    },
    {
      name: 'kick',
      description: 'Remove a user from the server',
      usage: '/kick <user> [reason]',
      category: 'moderation',
      permissions: ['Kick Members']
    },
    {
      name: 'timeout',
      description: 'Restrict a user\'s ability to interact temporarily',
      usage: '/timeout <user> <duration> [reason]',
      category: 'moderation',
      permissions: ['Moderate Members']
    },
    // UTILITY
    {
      name: 'avatar',
      description: 'Retrieve a user\'s avatar image',
      usage: '/avatar [user]',
      category: 'utility',
      permissions: []
    },
    {
      name: 'endpoll',
      description: 'Terminate a poll early and display results',
      usage: '/endpoll <poll_id>',
      category: 'utility',
      permissions: []
    },
    {
      name: 'invite',
      description: 'Generate a server invitation link',
      usage: '/invite',
      category: 'utility',
      permissions: []
    },
    {
      name: 'ping',
      description: 'Check bot latency and responsiveness',
      usage: '/ping',
      category: 'utility',
      permissions: []
    },
    {
      name: 'poll',
      description: 'Create interactive polls with multiple options',
      usage: '/poll <question> <option1> <option2> [option3] [option4]',
      category: 'utility',
      permissions: []
    },
    {
      name: 'serverinfo',
      description: 'Display detailed server information',
      usage: '/serverinfo',
      category: 'utility',
      permissions: []
    },
    {
      name: 'testerror',
      description: 'Command to verify error handling systems (Owner restricted)',
      usage: '/testerror',
      category: 'utility',
      permissions: ['Owner Only']
    },
    {
      name: 'userinfo',
      description: 'Display detailed user information',
      usage: '/userinfo [user]',
      category: 'utility',
      permissions: []
    }
  ];

  const filteredCommands = selectedCategory === 'all' 
    ? commands 
    : commands.filter(cmd => cmd.category === selectedCategory);

  return (
    <section id="commands" className="commands">
      <div className="container">
        <div className="commands-header">
          <h2 className="display-small">Command Reference</h2>
          <p className="body-large">Discover all the powerful commands available with Kaoruko</p>
        </div>

        <div className="commands-content">
          <div className="commands-sidebar">
            <div className="category-list">
              {commandCategories.map(category => (
                <button
                  key={category.id}
                  className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <span className="category-icon">{category.icon}</span>
                  <span className="category-name">{category.name}</span>
                  <span className="category-count">
                    {category.id === 'all' 
                      ? commands.length 
                      : commands.filter(cmd => cmd.category === category.id).length
                    }
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="commands-list">
            <div className="commands-grid">
              {filteredCommands.map((command, index) => (
                <div key={index} className="command-card">
                  <div className="command-header">
                    <h3 className="command-name">/{command.name}</h3>
                    <span className="command-category">{command.category}</span>
                  </div>
                  <p className="command-description">{command.description}</p>
                  <div className="command-usage">
                    <span className="usage-label">Usage:</span>
                    <code className="usage-code">{command.usage}</code>
                  </div>
                  {command.permissions.length > 0 && (
                    <div className="command-permissions">
                      <span className="permissions-label">Required Permissions:</span>
                      <div className="permissions-list">
                        {command.permissions.map((permission, idx) => (
                          <span key={idx} className="permission-tag">
                            {permission}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Commands;
