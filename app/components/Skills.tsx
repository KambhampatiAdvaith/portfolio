"use client";

import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiC,
  SiPytorch,
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiFastapi,
  SiPostgresql,
  SiMongodb,
  SiSupabase,
  SiDocker,
  SiGit,
  SiLinux,
} from "react-icons/si";

const SKILLS = [
  { icon: SiPython, color: "#3776AB" },
  { icon: SiJavascript, color: "#F7DF1E" },
  { icon: SiTypescript, color: "#3178C6" },
  { icon: SiC, color: "#A8B9CC" },

  { icon: SiPytorch, color: "#EE4C2C" },
  { icon: SiNextdotjs, color: "#FFFFFF" },
  { icon: SiReact, color: "#61DAFB" },
  { icon: SiNodedotjs, color: "#339933" },

  { icon: SiFastapi, color: "#009688" },
  { icon: SiPostgresql, color: "#4169E1" },
  { icon: SiMongodb, color: "#47A248" },
  { icon: SiSupabase, color: "#3ECF8E" },

  { icon: SiDocker, color: "#2496ED" },
  { icon: SiGit, color: "#F05032" },
  { icon: SiLinux, color: "#FCC624" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        padding: "7rem 0",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div
        style={{
          maxWidth: "1080px",
          margin: "0 auto",
          padding: "0 2.5rem",
        }}
      >
        <div style={{ marginBottom: "3rem" }}>
          <div className="section-label reveal">
            Technologies I Work With
          </div>
        </div>

        <div
          className="reveal d2 skills-grid"
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(150px,1fr))",
            gap: "1.5rem",
          }}
        >
          {SKILLS.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <div
                key={index}
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))",
                  border: "1px solid var(--border)",
                  borderRadius: "20px",
                  height: "150px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all .3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-8px)";
                  e.currentTarget.style.borderColor =
                    `${skill.color}55`;
                  e.currentTarget.style.boxShadow =
                    `0 0 30px ${skill.color}22`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(0)";
                  e.currentTarget.style.borderColor =
                    "var(--border)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <Icon
                  size={64}
                  color={skill.color}
                  style={{
                    filter: `drop-shadow(0 0 12px ${skill.color}80)`,
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media(max-width:768px){
          .skills-grid{
            grid-template-columns:repeat(2,1fr)!important;
          }
        }
      `}</style>
    </section>
  );
}