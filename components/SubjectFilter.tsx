"use client";
import { useEffect, useState } from "react";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectContent,
  SelectValue,
} from "./ui/select";
import { subjects } from "@/constants";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { formUrlQuery, removeKeysFromUrlQuery } from "@jsmastery/utils";

const SubjectFilter = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [subject, setSubject] = useState("all");

  useEffect(() => {
    if (subject && subject !== "all") {
      const newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "subject",
        value: subject,
      });

      router.push(newUrl, { scroll: false });
    } else {
      if (pathname === "/companions") {
        const newUrl = removeKeysFromUrlQuery({
          params: searchParams.toString(),
          keysToRemove: ["subject"],
        });

        router.push(newUrl, { scroll: false });
      }
    }
  }, [subject]);

  return (
    <Select value={subject} onValueChange={setSubject}>
      <SelectTrigger className="input capitalize">
        <SelectValue placeholder="Subject" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All subjects</SelectItem>
        {subjects.map((subject) => (
          <SelectItem key={subject} value={subject} className="capitalize">
            {subject}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SubjectFilter;
