import { RefObject, useCallback, useEffect, useState } from 'react'

export type Position = {
  offsetX: number
  offsetY: number
}

const OFFSET_DEFAULT = 4
const TRIGGER_DELAY_DEFAULT = 0

type Props = {
  targetSelector: string
  ref: RefObject<HTMLElement>
  placement?: 'top' | 'bottom'
  trigger?: 'click' | 'hover'
  closeByClickOutside?: boolean
  toggleByTrigger?: boolean
  offset?: number
  triggerDelay?: number
}
/**
 * @param targetSelector トリガー要素のdata属性
 * @param ref ポップアップ要素のref
 * @param placement 表示位置
 * @param trigger トリガーになるイベントの種類
 * @param closeByClickOutside トリガー要素以外をクリックした時にポップアップを閉じるか
 * @param toggleByTrigger トリガー要素をクリックした時に表示/非表示を切り替えるか
 * @param offset トリガー要素からずらす位置をピクセルで指定
 * @param triggerDelay トリガーされてから表示されるまでの時間をms指定
 * @returns ポップアップ要素の表示位置・表示状態 表示・非表示のステート変更関数
 */
export const usePopUp = ({
  targetSelector,
  ref,
  placement = 'top',
  trigger = 'click',
  closeByClickOutside = true,
  toggleByTrigger = false,
  offset = OFFSET_DEFAULT,
  triggerDelay = TRIGGER_DELAY_DEFAULT,
}: Props) => {
    console.log(ref.current?.offsetHeight)
  const [mounted, setMounted] = useState(false)
  const [visible, setVisible] = useState(false)
  const [position, setPosition] = useState<Position>({
    offsetX: 0,
    offsetY: 0,
  })
  const [wait, setWait] = useState<NodeJS.Timeout>()
  const show = () => {
    setWait(setTimeout(() => setVisible(true), triggerDelay))
  }

  const hide = useCallback(() => {
    clearTimeout(wait)
    setVisible(false)
  }, [wait])

  const toggle = () => {
    setVisible(!visible)
  }

  useEffect(() => setMounted(true), [])

  // トリガーになる要素にイベントを付与する
  useEffect(() => {
    if (!mounted) return
    const targetElement = document.querySelector(targetSelector)
    if (trigger === 'click') {
      targetElement?.addEventListener('click', toggleByTrigger ? toggle : show)
    } else {
      targetElement?.addEventListener('mouseenter', show)
      targetElement?.addEventListener('mouseleave', hide)
    }

    return () => {
      if (trigger === 'click') {
        targetElement?.removeEventListener('click', toggleByTrigger ? toggle : show)
      } else {
        targetElement?.removeEventListener('mouseenter', show)
        targetElement?.removeEventListener('mouseleave', hide)
      }
    }
  })

  /**
   * TODO: スクロールした時に位置を取り直す必要がある
   * 参考: https://github.com/bellface/aegis-baron/pull/435#discussion_r960180175
   */
  const getPosition = useCallback(() => {
    const targetElement = document.querySelector(targetSelector)
    if (!targetElement || !ref.current) return

    const targetRect = targetElement.getBoundingClientRect()
    const offsetX = targetRect.left + (targetRect.width - ref.current.getBoundingClientRect().width) / 2
    const offsetY =
      placement === 'top' ? targetRect.top - (ref.current.clientHeight + offset) : targetRect.bottom + offset

    return { offsetX, offsetY }
  }, [offset, placement, ref, targetSelector])

  // positionを設定する
  useEffect(() => {
    if (!mounted) return
    const elementPosition = getPosition()
    if (!elementPosition) return
    setPosition(elementPosition)
  }, [getPosition, mounted])

  // ポップアップ要素をクリックしたら閉じる
  useEffect(() => {
    if (!mounted) return
    ref.current?.addEventListener('click', hide)
  }, [hide, mounted, ref])

  // ポップアップ要素外をクリックした時のイベントを追加する
//   useClickAway(ref, event => {
//     const triggerElement = document.querySelector(targetSelector)
//     if (event.target === triggerElement) {
//       return
//     }
//     if (closeByClickOutside) {
//       hide()
//     }
//   })

  return { position, visible }
}