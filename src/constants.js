export const DARK = "dark";
export const LIGHT = "light";

export const themeDark = () => {
  return {
    theme: DARK,
    styles: {
      text: {
        colorPrimary: {
          class: "text-white"
        },
        colorSecondary: {
          class: "text-gray-400"
        }
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
        colorPrimary: {
          class: "text-gray-600"
        },
        colorSecondary: {
          class: "text-gray-400"
        }
      },
      bgColor: {
        class: "bg-gray-100"
      }
    }
  };
};
