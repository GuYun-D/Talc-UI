export const attributeEventConfig = {
  eventTitle: "Tag Event",
  eventItems: [
    {
      eventName: "beforeTagClose",
      desc: "标签关闭前触发",
      param: "回调函数，需要一个tag参数",
      paramType: "function",
    }
  ],
};

export const attributeEventConfig1 = {
  eventTitle: "TagInput Event",
  eventItems: [
    {
      eventName: "addTag",
      desc: "输入框失去焦点或回车触发",
      param: "输入的值",
      paramType: "string",
    }
  ],
};