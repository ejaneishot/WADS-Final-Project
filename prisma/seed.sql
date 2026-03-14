-- Optional seed data
INSERT INTO "Career" ("id","title","industry","description","createdAt")
VALUES
  ('seed1','Business Analyst','Business / Tech','Analyzes requirements, maps processes, and translates business needs into system improvements.', NOW()),
  ('seed2','Data Analyst','Analytics','Uses SQL/Excel/Python to clean data, build dashboards, and generate insights for decisions.', NOW()),
  ('seed3','UX Designer','Product','Designs user experiences through research, wireframes, prototypes, and usability testing.', NOW()),
  ('seed4','Product Manager','Product','Owns product direction, prioritizes roadmap, and aligns teams to deliver user value.', NOW())
ON CONFLICT DO NOTHING;
