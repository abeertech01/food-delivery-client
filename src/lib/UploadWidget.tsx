import clsx from "clsx"
import React, {
  ButtonHTMLAttributes,
  FormEvent,
  MouseEvent,
  useEffect,
  useRef,
} from "react"

const UploadWidget = ({
  children,
  className,
}: {
  children: React.ReactNode
  className: string
}) => {
  const cloudinaryRef = useRef<any>()
  const widgetRef = useRef<any>()

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary
    widgetRef.current = cloudinaryRef.current?.createUploadWidget(
      {
        cloudName: "dcpacfpwu",
        uploadPreset: "wmnviyh9",
      },
      function (error: any, result: any) {
        console.log(result)
      }
    )
  }, [])

  const openWidget = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    widgetRef.current?.open()
  }

  return (
    <button className={clsx(className)} onClick={openWidget}>
      {children}
    </button>
  )
}

export default UploadWidget
