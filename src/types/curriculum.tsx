type Chapter = {
  id: string;
  title: string;
  type: ChapterType;
};

type ChapterType = "video" | "article";

export type Section = {
  id: string;
  title: string;
  chapters: Chapter[];
};

export type Curriculum = {
    sections : Section[]
}


 /*
const curriculum = {
   sections:  [
    {
      "id" : "number",
      "title" : "something", 
      "chapters" : [
        {
          "id": "chapter id",
          "title" : "some title", 
          "type" : "video || article || etc"
        }
      ]
    }
    ]
}

*/