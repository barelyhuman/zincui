import { Layout } from "~/components/layout";
import { Button } from "~/components/shared/button";

export default () => {
  return (
    <Layout>
      <h1 class="font-semibold">ZincUI</h1>
      <section>
        <h2>Components</h2>
        <Button>Hello</Button>
        <pre>{Button.story}</pre>
      </section>
    </Layout>
  );
};
