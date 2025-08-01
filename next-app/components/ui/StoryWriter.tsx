"use client";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "./select";
import { Textarea } from "./Textarea";
import { Button } from "./button";
import { useState } from "react";
function StoryWriter() {
  //allstate for the story input
  const [story, setStory] = useState<string>("");
  //allstate for the number of pages
  const [pages, setPages] = useState<number>();
  //allstate for the progress of the story
  const [progress, setProgress] = useState<string>("");
  const [runFinished, setRunFinished] = useState<boolean | null>(null);
  const [runStarted, setRunStarted] = useState<boolean>(false);
  const[currentTool, setCurrentTool] = useState("");
  async function runScript() {
    setRunStarted(true);
    setRunFinished(false);
    
  }



  return (
    <div className="flex flex-col container ">
      <section className="flex-1 flex flex-col border border-purple-300 rounded-md p-12 ml-10 space-y-5">
        <Textarea
          value={story}
          onChange={(e) => setStory(e.target.value)}
          className="flex-1 text-black text-lg"
          placeholder="Write a story about a human and robt who become friend..."
        />

        <Select onValueChange={(value) => setPages(parseInt(value))}>
          <SelectTrigger>
            <SelectValue
              className="w-full "
              placeholder="How many pages should the story be?"
            />
          </SelectTrigger>
          <SelectContent className="w-full ">
            {Array.from({ length: 10 }, (_, i) => (
              <SelectItem key={i} value={String(i + 1)}>
                {i + 1} page
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button
          disabled={!story || !pages ||runStarted}
          onClick={runScript}
          className="w-full bg-purple-500 text-white hover:bg-purple-600 transition-colors duration-200"

        >
          Generate Story
        </Button>
      </section>
      <section className="flex-1 pb-5 mt-5">
        <div className="flex flex-col-reverse  space-y-3 bg-gray-700 rounded-md font-monop-10 h-96 overflow-y-auto ml-10 ">
          <div className="m-10">
            {runFinished === null && (
              <>
                <p className=" animate-pulse mr-5 text-white">
                  {" "}
                  Im waiting for you to Generate a story above it...
                </p>
              </>
            )}
            <span className="text-white ">{">>"}</span>
            {progress}
          </div>
          {currentTool &&(
            <div>
                <span className="text-white  mr-1.5">{"--- [Current Tool] ---"}</span>
            </div>
          )}

          {/*render Events  */}
          {runStarted &&(

            <div>
              <span className="mr-5 animated-in">
                {" ---[AI Storyteller Has started] ---"}
              </span>
              <br/>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default StoryWriter;
