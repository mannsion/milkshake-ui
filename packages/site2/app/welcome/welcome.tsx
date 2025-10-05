import { Button } from "../../components/button";
import { ButtonGroup } from "../../components/button-group";
import { IconButton } from "../../components/icon-button";
import { Box } from "../../components/box";
import { Grid, GridItem } from "../../components/grid";
import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";

export function Welcome() {
  return (
    <Box
      as="main"
      minHeight="screen"
      backgroundColor="background-primary"
      color="text-primary"
      paddingY={{ mobile: "16", md: "20" }}
      paddingX={{ mobile: "6", md: "12" }}
    >
      <Box display="flex" justifyContent="center" width="full">
        <Box width="full" maxWidth="80rem">
          <Grid
          columns={{ mobile: "cols1", md: "cols12" }}
          gap={{ mobile: "8", lg: "12" }}
          alignItems="center"
        >
          <GridItem columnSpan={{ mobile: "span1", md: "span7" }}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems={{ mobile: "center", md: "start" }}
              gap="8"
              textAlign="center"
            >
              <Box maxWidth="32rem" width="full">
                <picture>
                  <source srcSet={logoDark} media="(prefers-color-scheme: dark)" />
                  <img src={logoLight} alt="Milkshake UI" style={{ width: "100%" }} />
                </picture>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                gap="4"
                alignItems={{ mobile: "center", md: "start" }}
              >
                <Box
                  as="h1"
                  fontSize={{ mobile: "3xl", md: "4xl" }}
                  lineHeight="snug"
                  fontWeight="semibold"
                  letterSpacing="tight"
                >
                  Build expressive layouts with Milkshake UI
                </Box>
                <Box
                  as="p"
                  color="text-secondary"
                  fontSize={{ mobile: "lg", md: "xl" }}
                  maxWidth="32rem"
                  style={{ textAlign: "inherit" }}
                >
                  Start from composable primitives that understand every design
                  token. Mix responsive grid controls, semantic colors, and
                  interaction states without leaving TypeScript.
                </Box>
                <Box
                  display="flex"
                  flexDirection="column"
                  gap="4"
                  alignItems={{ mobile: "center", md: "start" }}
                  width="full"
                >
                  <Box
                    display="flex"
                    flexWrap="wrap"
                    gap="3"
                    justifyContent={{ mobile: "center", md: "start" }}
                  >
                    <Button tone="primary" leadingIcon={<span aria-hidden="true">🚀</span>}>
                      Launch
                    </Button>
                    <Button
                      variant="soft"
                      tone="accent"
                      trailingIcon={<span aria-hidden="true">✨</span>}
                    >
                      Highlight
                    </Button>
                    <Button variant="outline" tone="neutral">
                      Secondary
                    </Button>
                    <Button variant="ghost" tone="danger">
                      Quiet danger
                    </Button>
                    <Button variant="link" tone="info">
                      Learn more
                    </Button>
                    <Button tone="success" loading loadingLabel="Saving">
                      Saving
                    </Button>
                  </Box>
                  <ButtonGroup layout="horizontal">
                    <Button tone="primary" leadingIcon={<span aria-hidden="true">💾</span>}>
                      Save
                    </Button>
                    <Button variant="soft" tone="neutral">
                      Draft
                    </Button>
                    <Button variant="ghost" tone="danger">
                      Delete
                    </Button>
                  </ButtonGroup>
                  <ButtonGroup layout="vertical">
                    <Button tone="success">Deploy</Button>
                    <Button variant="outline" tone="neutral">
                      Preview
                    </Button>
                  </ButtonGroup>
                  <Box display="flex" gap="2">
                    <IconButton icon={<span aria-hidden="true">🔍</span>} label="Search" tone="neutral" />
                    <IconButton icon={<span aria-hidden="true">⚙️</span>} label="Settings" tone="accent" />
                    <IconButton
                      icon={<span aria-hidden="true">❤️</span>}
                      label="Favorite"
                      tone="danger"
                      variant="soft"
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </GridItem>

          <GridItem columnSpan={{ mobile: "span1", md: "span5" }}>
            <Box
              backgroundColor="surface-level1"
              borderRadius="3xl"
              borderWidth="thin"
              borderColor="border-default"
              padding={{ mobile: "6", md: "8" }}
              boxShadow="md"
              display="flex"
              flexDirection="column"
              gap="5"
            >
              <Box
                as="p"
                fontSize="lg"
                fontWeight="medium"
                textAlign="center"
                color="text-secondary"
              >
                What&apos;s next?
              </Box>

              <Grid columns={{ mobile: "cols1", sm: "cols2" }} gap="4">
                {resources.map((resource) => (
                  <GridItem key={resource.href}>
                    <ResourceCard {...resource} />
                  </GridItem>
                ))}
              </Grid>
            </Box>
          </GridItem>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

type Resource = {
  href: string;
  text: string;
  description: string;
};

const resources: Resource[] = [
  {
    href: "https://reactrouter.com/docs",
    text: "React Router Docs",
    description: "Understand the data APIs that power this demo shell.",
  },
  {
    href: "https://rmx.as/discord",
    text: "Join Discord",
    description: "Chat with other builders and share your Milkshake experiments.",
  },
];

const ResourceCard = ({ href, text, description }: Resource) => (
  <Box
    as="a"
    href={href}
    target="_blank"
    rel="noreferrer"
    display="flex"
    flexDirection="column"
    gap="3"
    padding="4"
    borderRadius="xl"
    borderWidth="thin"
    borderColor="border-light"
    backgroundColor={{ mobile: "surface-level2", hover: "surface-level3" }}
    color="text-primary"
    textDecoration="none"
    transitionProperty="all"
    transitionDuration="fast"
  transitionTimingFunction="out"
    boxShadow={{ mobile: "md", hover: "lg" }}
  >
    <Box fontWeight="medium">{text}</Box>
    <Box as="span" color="text-tertiary" fontSize="sm">
      {description}
    </Box>
  </Box>
);
