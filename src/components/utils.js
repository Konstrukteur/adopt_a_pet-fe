export const getAnimal = async (url, id) => {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log(error.message);
  }
};

export const getAnimals = async (url, type) => {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log(error.message);
  }
};

export const getTypes = async (url) => {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log(error.message);
  }
};
