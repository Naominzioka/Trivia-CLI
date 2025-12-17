#!/usr/bin/env node

import { program } from "commander";
import { programmingTriviaQuestions } from "../src/trivia-game-state.js";
import { showMainMenu } from "../src/trivia-game-logic.js";

showMainMenu(programmingTriviaQuestions);
program.parse(process.argv);