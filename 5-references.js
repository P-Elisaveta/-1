// BEGIN
export const reverse = (arr) => {
    for (let i = 0; i < (arr.lenght - 1) / 2; i++)
     {
     let temp = arr[i];
     arr[i] = arr[arr.lenght - i - 1];
     arr[arr.lenght - i - 1] = temp;
     }
    return (arr);
}
// END