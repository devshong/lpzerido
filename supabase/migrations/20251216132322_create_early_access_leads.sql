/*
  # Create Early Access Leads Table

  1. New Tables
    - `early_access_leads`
      - `id` (uuid, primary key)
      - `full_name` (text, required)
      - `email` (text, unique, required)
      - `created_at` (timestamptz, default now())
      - `ip_address` (text, optional - for tracking)
  
  2. Security
    - Enable RLS on `early_access_leads` table
    - Add policy to allow public inserts (for form submission)
    - No public read access (only authenticated admins should read)
  
  3. Notes
    - Email is unique to prevent duplicate signups
    - created_at tracks when user signed up
*/

CREATE TABLE IF NOT EXISTS early_access_leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text UNIQUE NOT NULL,
  ip_address text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE early_access_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public to submit early access requests"
  ON early_access_leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE INDEX IF NOT EXISTS idx_early_access_email ON early_access_leads(email);
CREATE INDEX IF NOT EXISTS idx_early_access_created_at ON early_access_leads(created_at DESC);