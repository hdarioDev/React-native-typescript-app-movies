import ImageColors from "react-native-image-colors"

export const getImageColors = async (uri: string) => {
    const colors = await ImageColors.getColors(uri, {
        // fallback: '#228B22',
        // cache: true,
        // key: 'unique_key',
    })
    let primary;
    let secundary;

    switch (colors.platform) {
        case 'android':
            // android colors properties
            primary = colors.dominant;
            secundary = colors.average;
            break
        // case 'web':
        //   // web colors properties
        //   const lightVibrantColor = colors.lightVibrant
        //   break
        case 'ios':
            // iOS colors properties
            primary = colors.primary;
            secundary = colors.secondary;
            break
        default:
            throw new Error('Unexpected platform key')
    }
    return {
        primary,
        secundary
    }


}