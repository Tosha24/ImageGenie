import React, { useState } from "react";
import Responses from "./Responses";
import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";
import { prompts } from "./Prompts";

const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const [rangeValue, setRangeValue] = useState(1);
  const [response, setResponse] = useState<any>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRangeValue(Number(event.target.value));
  };

  const generateImage = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      dotenv.config();
      const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
      });

      const openai = new OpenAIApi(configuration);
      const responses = await openai.createImage(
        {
          prompt: inputValue,
          n: rangeValue,
          size: "1024x1024",
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          },
        }
      );
      setResponse(responses.data.data);
    } catch (error) {
      console.log(error);
    }
    setInputValue("");
  };

  const getRandomIndex = (length: number) => {
    return Math.floor(Math.random() * length);
  }

  const generateRandomPrompt = async() => {
    try{
      const randomIndex : number = getRandomIndex(prompts.length);
      const randomPrompt : string = prompts[randomIndex];
      console.log(randomPrompt);
      setInputValue(randomPrompt);
    }
    catch(error){
      console.log(error);
    }
  };

  return (
    <div>
      <div className="w-4/5 flex flex-row mx-auto pt-2 mt-24">
        <span className="text-md md:text-lg text-primary font-medium font-bodyFont">
          Start with a detailed description
        </span>
        <button onClick={generateRandomPrompt} className="border ml-3 p-1 mb-5 px-2 rounded-lg text-sm border-primary text-primary bg-tertiary font-bold focus:outline-none hover:bg-secondary">
          Surprise me
        </button>
      </div>
      <form onSubmit={generateImage}>
        <div className="flex flex-col w-4/5 mx-auto">
          <div className="flex flex-row sath">
            <input
              type="text"
              className="bg-lightest border-2 border-secondary rounded-l-md w-full h-10 focus:outline-none text-black font-lg pl-3 border-r-0"
              placeholder="An Impressionist oil painting of sunflowers in a purple vase..."
              value={inputValue}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="lg:w-[7%] border-2 border-secondary rounded-r-md h-10 bg-lightest text-gray-500 font-semibold cursor-pointer "
            >
              Generate
            </button>
          </div>
          <div className="slider group flex flex-row items-center">
            <label className="flex flex-row text-black text-md">
              {" "}
              No. of Image{" "}
            </label>
            <input
              type="range"
              min="0"
              max="10"
              step="1"
              value={rangeValue}
              onChange={handleSliderChange}
              className="w-full my-8 accent-gray-600"
            />
            <div className="w-8 bg-lightest text-black pl-3 rounded-full font-extrabold text-xl">
              {rangeValue}
            </div>
          </div>
        </div>
      </form>
      <div className="h-auto w-4/5 mx-auto my-14">
        {response ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {response.map((image: any, index: any) => (
              <Responses key={index} image={image.url} />
            ))}
          </div>
        ) : (
          <div className="text-2xl flex items-center justify-center h-full w-full">
            {" "}
            <span className="items-center my-auto justify-center flex mt-auto text-black font-semibold">
              {" "}
              No Image!! Please Enter Valid input and click on generate button
            </span>{" "}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;