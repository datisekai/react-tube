import { FC, useState } from "react";
import SunEditor from "suneditor-react";
import { en } from "suneditor/src/lang";
import plugins from "suneditor/src/plugins";
import { uploadCloudinary } from "../actions";

interface TranslationProps {
  initialContent?: string;
  onChange: any;
  height?: string;
  buttonList?: string[];
}

const TextEditor: FC<TranslationProps> = ({
  initialContent = "",
  onChange,
  height = "500px",
  buttonList = [
    "font",
    "fontSize",
    "formatBlock",
    "bold",
    "underline",
    "italic",
    "paragraphStyle",
    "blockquote",
    "strike",
    "subscript",
    "superscript",
    "fontColor",
    "hiliteColor",
    "textStyle",
    "removeFormat",
    "undo",
    "redo",
    "outdent",
    "indent",
    "align",
    "horizontalRule",
    "list",
    "lineHeight",
    "table",
    "link",
    // "image",
    // 'video',
    // 'audio',
    // You must add the 'katex' library at options to use the 'math' plugin.
    // 'math',
    // You must add the "imageGalleryUrl".
    // 'imageGallery',
    "fullScreen",
    "showBlocks",
    "codeView",
    "preview",
    // 'print'
    // 'save',
    // 'template'
  ],
}) => {
  const handleImageUploadError = (errorMessage: any, result: any) => {
    console.log(errorMessage, result);
  };

//   const handleImageUploadBefore = (
//     files: any,
//     info: any,
//     uploadHandler: any
//   ) => {
//     const uploadBefore = async () => {
//       const result = await uploadCloudinary(files[0]);
//       const response = {
//         result: [
//           {
//             url: result,
//             name: files[0].name,
//             size: files[0].size,
//           },
//         ],
//       };

//       uploadHandler(response);
//     };

//     uploadBefore();
//   };

  const options: any = {
    plugins: plugins,
    height: 250,
    lang: en,
    buttonList: [
      buttonList
    ],
  };

  return (
    <>
      <SunEditor
        autoFocus={true}
        width="100%"
        height={height}
        // onImageUploadBefore={handleImageUploadBefore as any}
        onImageUploadError={handleImageUploadError}
        setOptions={options}
        setContents={initialContent}
        onChange={onChange}
      />
    </>
  );
};

export default TextEditor;