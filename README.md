## Local Storage Project

### Notes

##### .append() method is used when we want to append multiple elems
##### .appendChild() method is used when we want to append single elem

##### .setItem("itemname", []) converts everything to string anyway, but, regardles, it should be converted to string prior to setting to local storage to avoid possible errors. 
##### We achieve this with JSON.stringify(anything) method which turn anything into a string

##### .getItem("itemname") method gets items stored in local storage and returns it as a string
##### JSON.parse(itemfromlocalstorage) turns item as string from local storage to whatever object it is/was