
//  const movies = sortYear(Movies);
//  sortYear() takes in Movies array
// sorts movie objects by property year in descending order

const sortYear = (movies) => {
  return movies.sort((a,b) => b.year - a.year);
};

const sortTitle = (movies) => {
  return movies.sort((a,b) => {
    const titleA = a.title.replace(/^(A|An|The)\s+/i, '');
    const titleB = b.title.replace(/^(A|An|The)\s+/i, '');
    return titleA.localeCompare(titleB);
  });
};


module.exports = { sortYear , sortTitle};

