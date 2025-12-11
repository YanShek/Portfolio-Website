-- PostgreSQL Database Schema for Projects

-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    image VARCHAR(255),
    link VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create index on id for faster lookups
CREATE INDEX IF NOT EXISTS idx_projects_id ON projects(id);

-- Insert sample data (optional - remove if you want to add projects manually)
INSERT INTO projects (name, description, image, link) VALUES
    ('Sample Project 1', 'This is a sample project description.', '/Projects/Schedule.png', 'https://github.com'),
    ('Sample Project 2', 'Another sample project description.', '/Projects/UnrealAI.png', 'https://github.com')
ON CONFLICT DO NOTHING;

