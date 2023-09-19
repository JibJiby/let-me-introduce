type Props = React.ComponentProps<'div'>

export function IconBox({ children }: Props) {
  return (
    <div
      className="p-2 transition-all duration-150 ease-in bg-white rounded-lg select-none cursor-none hover:scale-125"
      style={{
        boxShadow:
          'rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px',
      }}
    >
      {children}
    </div>
  )
}
