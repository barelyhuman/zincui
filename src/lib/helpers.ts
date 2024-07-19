export const getVariantPropsString = (varObject) => {
    const keys = Object.keys(varObject.variants);
    return keys.join(",");
  };

export  const getVariantObjName = (component) => {
    return [component.displayName.toLowerCase(), "Variants"].join("");
  };