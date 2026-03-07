import React, { memo } from "react"
import styles from './contact.module.scss'
import { useForm, SubmitHandler } from "react-hook-form"
import emailjs from 'emailjs-com'
import { Map } from '@/components/blocks'
import { FiMail } from 'react-icons/fi'
import { FormInputs } from '@/types/types'
import { toast } from "react-toastify"

export const Contact = memo(function Contact() {

  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInputs>()

  const sendForm: SubmitHandler<FormInputs> = (data) => {
    const check = data.check
    if (check) {
      toast.error('メール送信に失敗しました！')
      return
    }

    const params = {
      to_name: data.to_name,
      to_email: data.to_email,
      message: data.message,
    }

    if (publicKey && serviceId && templateId) {

      emailjs.send(
        serviceId,
        templateId,
        params,
        publicKey
      )
        .then((result) => {
          toast('お問い合わせメールを送信しました！')
          reset()
        }, (error) => {
          toast.error('メール送信に失敗しました！')
        })
    } else {
      toast.error('メール送信に失敗しました！')
    }
  }

  return (<>
    <div className={styles.main}>
      <div className={styles.title_area}>
        <h1 className={styles.title}>
          <FiMail color={'#e94560'} />
          Contact
        </h1>
      </div>

      <br />

      <div className={styles.sub_title_area}>
        <h2 className={styles.sub_title}>
        東中野にあるカラオケバー・ルード：お問い合わせ
        </h2>
      </div>

      <br />

      <div>
        <p className={styles.text}>
          当店に関するお問い合わせは、以下のフォームかTwitterのDMにてお願いします。<br />
          貸切イベントをやりたい方、一日店長をやりたい方などもお気軽にお問い合わせください。（定休日の木曜日・日曜日推奨）<br /><br />
          Twitter：<span className={styles.out_link}><a href="https://x.com/rude_rockers" target="_blank" rel="noopener noreferrer">訓志@バーテンエンジニア</a></span><br /><br />
          また、リアルタイムで店内の混雑状況が見れる公式LINEアカウントが便利です！<br />
          <span className={styles.out_link}><a href="https://line.me/R/ti/p/@857qlwqm" target="_blank" rel="noopener noreferrer">RUDE公式LINEアカウント</a></span>
        </p>
      </div>

      <br />

      <Map />

      <br />

      <h2 className='page_title'>
        お問い合わせ
      </h2>

      <form onSubmit={handleSubmit(sendForm)}>
        <div className={styles.contact}>
          <table className={styles.form_table}>
            <tbody>
              <tr>
                <td className={styles.form_item}>
                  <label htmlFor="to_name">氏名 <span className={styles.badge}>必須</span></label>
                </td>
                <td className={styles.form_body}>
                  <input
                    id="to_name"
                    type="text"
                    placeholder="山田 太郎"
                    {...register("to_name", {
                      required: {
                        value: true,
                        message: '入力が必須の項目です',
                      },
                      maxLength: {
                        value: 30,
                        message: '30文字以下で入力してください',
                      },
                    })}
                  />
                  {errors.to_name?.type === 'required' && (
                    <div className={styles.error}>{ errors.to_name?.message }</div>
                  )}
                  {errors.to_name?.type === 'maxLength' && (
                    <div className={styles.error}>{ errors.to_name?.message }</div>
                  )}
                </td>
              </tr>

              <tr>
                <td className={styles.form_item}>
                  <label htmlFor="to_email">メールアドレス <span className={styles.badge}>必須</span></label>
                </td>
                <td className={styles.form_body}>
                  <input
                    id="to_email"
                    type="text"
                    placeholder="info@email.com"
                    {...register("to_email", {
                      required: {
                        value: true,
                        message: '入力が必須の項目です',
                      },
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "メールアドレスの形式が違います"
                      },
                      maxLength: {
                        value: 150,
                        message: '150文字以下で入力してください',
                      },
                    })}
                  />
                  {errors.to_email?.type === 'required' && (
                    <div className={styles.error}>{ errors.to_email?.message }</div>
                  )}
                  {errors.to_email?.type === 'pattern' && (
                    <div className={styles.error}>{ errors.to_email?.message }</div>
                  )}
                  {errors.to_email?.type === 'maxLength' && (
                    <div className={styles.error}>{ errors.to_email?.message }</div>
                  )}
                </td>
              </tr>

              <tr>
                <td className={styles.form_item}>
                  <label>本文 <span className={styles.badge}>必須</span></label>
                </td>
                <td className={styles.form_body}>
                  <textarea
                    id="message"
                    placeholder="問い合わせ内容・・・"
                    {...register("message", {
                      required: {
                        value: true,
                        message: '入力が必須の項目です',
                      },
                      maxLength: {
                        value: 2000,
                        message: '2000文字以下で入力してください',
                      },
                    })}
                  />
                  {errors.message?.type === 'required' && (
                    <div className={styles.error}>{ errors.message?.message }</div>
                  )}
                  {errors.message?.type === 'maxLength' && (
                    <div className={styles.error}>{ errors.message?.message }</div>
                  )}
                </td>
              </tr>
            </tbody>
          </table>

          <div className={styles.bottun_area}>
            <input
              id="check"
              type="text"
              className={styles.hidden}
              {...register("check", {
                maxLength: {
                  value: 100,
                  message: '100文字以下で入力してください',
                },
              })}
            />
          </div>
        </div>
        <div>
          <button type="submit" className={styles.submit_button} id="submit">
            問い合わせを送信する
          </button>
        </div>
      </form>

      <br />

    </div>
  </>)
})
