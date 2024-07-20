import { Layout } from '~/components/layout'
import { styles } from '~/components/shared/style-registry'
import { cn } from '~/lib/cn'
import { cva } from 'class-variance-authority'
import { h } from 'preact'

export default () => {
  return (
    <Layout>
      <hgroup>
        <h1 class="font-semibold">UI</h1>
        <p>Tailwind Styled HTML Primitives for the rest of the world</p>
      </hgroup>
      <section>
        {styles.map(d => {
          const classVariantBuilder = cva(d.base, d.variants)
          const variants = Object.keys(d.variants.variants)
          const variantProperties = variants.reduce((acc, varKey) => {
            acc[varKey] = Object.keys(d.variants.variants[varKey]).sort()
            return acc
          }, {})
          return (
            <div class="mt-10">
              <h2 class="font-bold text-xl">
                <span class="capitalize">{d.name}</span> Variants
              </h2>
              <h3 class="font-semibold">Default</h3>
              <a class="btn">Hello</a>
              {d.forElements.map(el => {
                return (
                  <div class="mt-1">
                    {h(
                      el,
                      {
                        class: cn(classVariantBuilder({})),
                      },
                      'Sample Text'
                    )}
                  </div>
                )
              })}
              {variants.map(variantKey => {
                return (
                  <div class="flex flex-col gap-2 mt-10">
                    <h3 class="flex gap-2">
                      <code class="bg-overlay p-2 rounded-md">
                        {variantKey}={`{`}
                        {variantProperties[variantKey]
                          .filter(innerKey => innerKey !== 'default')
                          .map((d, index, src) => {
                            const isLast = index == src.length - 1
                            return (
                              <span>
                                "{d}"{isLast ? '' : '|'}
                              </span>
                            )
                          })}
                        {`}`}
                      </code>
                    </h3>
                    <div class="flex gap-2 mt-1">
                      {d.forElements.map(el => {
                        return variantProperties[variantKey]
                          .filter(innerKey => innerKey !== 'default')
                          .map(keyProp => {
                            if (keyProp == 'icon') {
                              return h(
                                el,
                                {
                                  class: cn(
                                    classVariantBuilder({
                                      [variantKey]: keyProp,
                                    })
                                  ),
                                },
                                '▲'
                              )
                            }
                            return h(
                              el,
                              {
                                class: cn(
                                  classVariantBuilder({
                                    [variantKey]: keyProp,
                                  })
                                ),
                              },
                              'Sample Text'
                            )
                          })
                      })}
                    </div>
                  </div>
                )
              })}
            </div>
          )
        })}
      </section>
    </Layout>
  )
}
