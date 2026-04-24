import { createFileRoute } from "@tanstack/react-router";

import { MasterclassLanding } from "@/components/masterclass/masterclass-landing";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kids Confidence Masterclass | 4-Week Journey" },
      {
        name: "description",
        content:
          "A premium 4-week personality development masterclass for ages 10–16 focused on confidence, communication, public speaking, and parent-trusted transformation.",
      },
      { property: "og:title", content: "Kids Confidence Masterclass | 4-Week Journey" },
      {
        property: "og:description",
        content:
          "Help your child go from shy to confident with a live, interactive 4-week speaking and personality development masterclass.",
      },
      { name: "twitter:title", content: "Kids Confidence Masterclass | 4-Week Journey" },
      {
        name: "twitter:description",
        content:
          "A cinematic, scroll-based masterclass site for a 4-week confidence and communication journey for children aged 10–16.",
      },
    ],
    links: [{ rel: "canonical", href: "https://id-preview--00c341d7-04dd-48d5-a999-1bb7859dab8b.lovable.app/" }],
  }),
  component: Index,
});

function Index() {
  return <MasterclassLanding />;
}
