import { Slider, SliderProps } from '@mui/material'

export const SuperRange = (props: SliderProps) => {
  const primaryColor = '#00CC22'
  const boxShadow = '0 0 0 8px rgba(0, 204, 34, 0.16)'

  return (
    <Slider
      sx={{
        width: 200,
        '& .MuiSlider-track': {
          backgroundColor: primaryColor,
        },
        '& .MuiSlider-rail': {
          backgroundColor: '#8B8B8B',
          borderRadius: '10px',
        },

        '& .MuiSlider-thumb': {
          backgroundColor: '#FFFFFF',
          border: `2px solid ${primaryColor}`,
          '&:hover': {
            boxShadow: boxShadow,
          },
          '&:before': {
            content: '\'\'',
            display: 'block',
            width: '5px',
            height: '5px',
            backgroundColor: primaryColor,
            borderRadius: '50%',
            boxShadow: 'none',
          },
          '&.Mui-active, &.Mui-focusVisible': {
            boxShadow: boxShadow,
          },
        },

      }}
      {...props}
    />
  )
}

export default SuperRange
