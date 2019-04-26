
const validateItem = async (body) => {
  const {id, name, keywords} = body;
  await validateRequiredValues(id, name);
  const keywordsList = await validateOptional(keywords);

  const item = {
    id: id,
    name: name,
    keywords: keywordsList,
  };

  return item;
};

const validateRequiredValues = async ( id, name ) => {
  if ( !existsId(id) || !existsName(name) ) {
    throw new Error('Invalid Required fields');
  }
};

const existsId = ( id ) => {
  return ( id !== undefined && typeof id === 'number' );
};

const existsName = ( name ) => {
  return ( name !== undefined && typeof name === 'string' );
};

const validateOptional = async ( keywords ) => {
  let uniqueArray = [];

  if ( typeof keywords === 'object') {
    const list = [...new Set(keywords)];
    const map = new Map();
    list.forEach((o) => map.set(o, true));
    uniqueArray = [...map.keys()];
  }
  return uniqueArray;
};

module.exports = validateItem;
