// typed-htmx declares mostly ambient types so this is all you need.
import { Child } from "hono/jsx";
import "typed-htmx";

// A demo of how to augment foreign types with htmx attributes.
// In this case, Hono sources its types from its own namespace, so we do the same
// and directly extend its namespace.
declare global {
  namespace Hono {
    interface HTMLAttributes extends HtmxAttributes {
      // children?: Child; //uncommenting this will resolve the type error
    }
  }
}
