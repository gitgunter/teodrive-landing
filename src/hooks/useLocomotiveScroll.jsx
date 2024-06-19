import { useEffect, useRef } from 'react'

const useLocomotiveScroll = () => {
  const scrollRef = useRef(null)

  useEffect(() => {
    let locomotiveScroll;

    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default
      if (scrollRef.current) {
        locomotiveScroll = new LocomotiveScroll({
          el: scrollRef.current,
          smooth: true
        })
      }
    })()

    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy()
    }
  }, [])

  return scrollRef
}

export default useLocomotiveScroll
