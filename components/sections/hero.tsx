import React from "react";
import { Section } from "../ui/section";

export const Hero: React.FC = () => {
  return (
    <Section>
      <div className="mt-12">
        <h1>Experimentation of auth with Auth.js</h1>
        <p className="lead">
          Implementing authentication in a Next.js application with Auth.js
        </p>
      </div>
    </Section>
  );
};
