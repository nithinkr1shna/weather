export const DARK = "dark";
export const LIGHT = "light";

export const themeDark = () => {
  return {
    theme: DARK,
    styles: {
      text: {
        class: "text-white"
      },
      bgColor: {
        class: "bg-gray-800"
      }
    }
  };
};

export const themeLight = () => {
  return {
    theme: LIGHT,
    styles: {
      text: {
        class: "text-gray-600"
      },
      bgColor: {
        class: "bg-gray-100"
      }
    }
  };
};
