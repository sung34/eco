import React from "react";
import certificationImg from "@/public/img/cert.png";
import Image from "next/image";
import StyledArticle, {
  StyledArticleObjectType,
} from "@/components/styledArticle";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
type Props = {};

const content: StyledArticleObjectType[] = [
  {
    title: "",
    contentImg: "",
    content: (
      <Dialog>
        <DialogTrigger className="">
          <figure className="relative select-none">
            <Image
              title="눌러서 확대"
              className=""
              src={certificationImg}
              alt=""
            />
          </figure>
        </DialogTrigger>

        <DialogContent className="select-none">
          <Image src={certificationImg} alt="" />
        </DialogContent>
      </Dialog>
    ),
  },
];

export default function CertificationPage({}: Props) {
  return (
    <>
      <StyledArticle reversed mainHeader="특허" contents={content} />
    </>
  );
}
