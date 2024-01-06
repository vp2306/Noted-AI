"use client";
import React from "react";
import Link from "next/link";
import { Butcherman } from "next/font/google";
import { Button } from "@/components/ui/button";
import { ChevronLeftCircle } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import { Separator } from "@radix-ui/react-separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";

type Props = {};

const Page = (props: Props) => {
  const [input, setInput] = React.useState("");

  const createNotebook = useMutation({
    mutationFn: async () => {
      const response = await axios.post("/api/newNoteBook", {
        name: input,
      });
      return response.data;
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input === "") {
      window.alert("Please enter a name for your notebook");
      return;
    }
    createNotebook.mutate(undefined, {
      onSuccess: () => {
        console.log("created new note:");
      },
      onError: (error) => {
        console.error(error);
        window.alert("Failed to create new notebook");
      },
    });
  };

  return (
    <>
      <div className="grainy min-h-screen">
        <div className="max-w-7xl mx-auto p-10">
          <div className="h-14"></div>
          <div className="flex justify-between items-center md:flex-row flex-col">
            <div className="flex items-center">
              <div className="w-4"></div>
              <h1 className="text-3xl font-bold text-gray-900">My notes</h1>
              <div className="w-4"></div>
              <UserButton />
            </div>
            <div className="h-8"></div>

            <div className="h-8"></div>
          </div>
          <div className="mt-4"></div>
          <Separator
            orientation="horizontal"
            className="border-t border-gray-300 w-full my-4"
          />
          <div className="text-center">
            <h2 className="text-xl text-gray-500 ">You have no notes yet</h2>
          </div>

          {/* display all the new notes */}
          <div className="grid sm:grid-cols-3 md:grid-cols-5 grid-cols-1 gap-3">
            <Dialog>
              <DialogTrigger>
                <div className="border-dashed border-2 flex border-blue-600 h-full rounded-lg items-center justify-center sm:flex-col hover:shadow-xl transition hover:-translate-y-1 flex-row p-4">
                  <Plus className="w-6 h-6 text-blue-600" strokeWidth={3} />
                  <h2 className="font-semibold text-blue-600 sm:mt-2">
                    New Note Book
                  </h2>
                </div>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>New notebook.</DialogTitle>
                  <DialogDescription>
                    You can create a new note by clicking the button below.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit}>
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="name..."
                  />
                  <div className="h-4"></div>
                  <div className="flex items-center gap-2">
                    <Button type="reset" variant={"secondary"}>
                      Cancel
                    </Button>
                    <Button type="submit" className="bg-blue-600">
                      Create
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
