import { expect, expectTypeOf, test } from "vitest";

import { CardSchema, ICardSchema } from "./card-schema.ts";

test("card schema parsed a valid card object", () => {
  expect(
    CardSchema.parse({
      message: "Hello",
      imageDecoration: true,
      imageCaption: "Hello",
    }),
  ).toEqual({
    message: "Hello",
    imageDecoration: true,
    imageCaption: "Hello",
  });

  expect(
    CardSchema.parse({
      message: "Hello",
      imageDecoration: false,
      imageCaption: "Hello",
    }),
  ).toEqual({
    message: "Hello",
    imageDecoration: false,
    imageCaption: "Hello",
  });
});

test("imageCaption can be undefined", () => {
  expect(
    CardSchema.parse({
      message: "Hello",
      imageDecoration: false,
    }),
  ).toEqual({
    message: "Hello",
    imageDecoration: false,
  });
});

test("imageCaption must not be null", () => {
  expect(() =>
    CardSchema.parse({
      message: "Hello",
      imageDecoration: false,
      imageCaption: null,
    }),
  ).toThrowError();
});

test("decoration must be set", () => {
  expect(() =>
    CardSchema.parse({
      message: "Hello",
    }),
  ).toThrowError();
});

test("decoration must be boolean", () => {
  expect(() =>
    CardSchema.parse({
      message: "Hello",
      imageDecoration: "yes please",
    }),
  ).toThrowError();
});

test("message must be at least five chars long", () => {
  expect(() =>
    CardSchema.parse({
      message: "",
      imageDecoration: false,
      imageCaption: "My Caption",
    }),
  ).toThrowError();

  expect(() =>
    CardSchema.parse({
      message: "Moin",
      imageDecoration: false,
      imageCaption: "My Caption",
    }),
  ).toThrowError();
});

test("message should have own error message", () => {
  const result = CardSchema.safeParse({
    message: "Moin",
    imageDecoration: false,
    imageCaption: "Hello React",
  });
  expect(result.error);
  expect(result.error?.issues[0].message).toBe(
    "Please enter at least 5 chars for the message.",
  );
});

test("ICardSchema TypeScript type should be correct", () => {
  function verifyICardSchemaTypeScriptType(card: ICardSchema) {
    // MAKE SURE HERE HARE NO TYPE ERRORS:
    expectTypeOf(card["message"]).toEqualTypeOf<string>();
    expectTypeOf(card["imageCaption"]).toEqualTypeOf<string | undefined>();
    expectTypeOf(card["imageDecoration"]).toEqualTypeOf<boolean>();
  }
});
