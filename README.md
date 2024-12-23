# Unexpected 'undefined' Output with Optional Parameters in TypeScript

This repository demonstrates a common source of confusion in TypeScript related to optional parameters and the handling of the `undefined` value.

## The Problem

When an optional parameter is not provided, TypeScript correctly defaults it to `undefined`. However, explicitly passing `undefined` to the function leads to the same `undefined` output, which might not always be the intended behavior.

## Reproduction

The `bug.ts` file contains a function with an optional parameter. Calling the function without an argument or with `undefined` produces identical results.

## Solution

The `bugSolution.ts` file provides a solution by checking for both the absence of an argument and the explicit `undefined` value. This allows for differentiation in behavior based on whether the parameter was explicitly omitted or deliberately set to `undefined`.