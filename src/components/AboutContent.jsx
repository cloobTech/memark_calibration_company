import React from "react";

const AboutContent = ({
  title,
  content,
  has_other_content,
  content_2,
  content_3,
  content_4,
}) => {
  return (
    <div className="my-4 ">
      <h3 className="text-gray-700 mb-[2px]">{title}</h3>
      <p className="text-sm text-gray-500">{content}</p>
      {has_other_content && (
        <div className="flex flex-col gap-2 mt-4">
          <p className="text-sm text-gray-500">{content_2}</p>
          <p className="text-sm text-gray-500">{content_3}</p>
          <p className="text-sm text-gray-500">{content_4}</p>
        </div>
      )}
    </div>
  );
};

export default AboutContent;
