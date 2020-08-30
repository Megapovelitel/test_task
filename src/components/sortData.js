const sortData = (data) => {

    data = data.filter(item => item.population > 50000)
               .sort((a, b) => a.city.localeCompare(b.city));

  //найти город с наибольшим населением
    const firstItem = data.reduce((acc, cur) => (+acc.population > +cur.population) ? acc : cur);

  //убрать из отсортированного массива firstItem и добавить в начало массива
    data.splice(data.indexOf(firstItem),1);
    data.unshift(firstItem);

    return data
}

export default sortData 
