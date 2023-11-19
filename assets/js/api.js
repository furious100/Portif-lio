




async function fetchProfileDate(){
    const url = 'https://raw.githubusercontent.com/furious100/Portif-lio/main/data/profile.json';
    const fetching = await fetch(url)
    return await fetching.json()

}