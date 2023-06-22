/**
 * Minified by jsDelivr using Terser v5.15.1.
 * Original file: /npm/table-sort-js@1.9.2/table-sort.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
function tableSortJs(e = !1, t = document) {
    const [n] = (function () {
            if (!0 === e) {
                return [t.getElementsByTagName('table')]
            }
            return [document.getElementsByTagName('table')]
        })(),
        o = {},
        l = {}
    for (let e of n) e.classList.contains('table-sort') && r(e)
    function r(n) {
        let o, l
        0 === n.getElementsByTagName('thead').length
            ? ((o =
                  !0 === e
                      ? t.createElement('thead')
                      : document.createElement('thead')),
              o.appendChild(n.rows[0]),
              n.insertBefore(o, n.firstChild),
              (l =
                  n.querySelectorAll('tbody').length > 1
                      ? n.querySelectorAll('tbody')[1]
                      : n.querySelector('tbody')))
            : (l = n.querySelector('tbody'))
        const r = n.querySelector('thead').querySelectorAll('th')
        for (let [e, t] of r.entries())
            t.classList.contains('disable-sort') ||
                ((t.style.cursor = 'pointer'), i(t, e, l, n))
    }
    function i(e, t, n, r) {
        const i = e.classList.contains('order-by-desc')
        let a = r.classList.contains('table-arrows')
        const [s, c] = [' ▲', ' ▼']
        i && a
            ? e.insertAdjacentText('beforeend', c)
            : a && e.insertAdjacentText('beforeend', s)
        let [u, d] = [0, []]
        function f(n) {
            const {
                tableRows: r,
                columnData: d,
                isFileSize: f,
                isDataAttribute: m,
                colSpanData: b,
                colSpanSum: S,
            } = n
            for (let [e, n] of r.entries()) {
                let r = n
                    .querySelectorAll('td')
                    .item(1 === b[t] ? S[t] - 1 : S[t] - b[t]).textContent
                0 === r.length && (r = ''),
                    '' !== r.trim()
                        ? (f && (l[d[e]] = n.innerHTML),
                          f ||
                              m ||
                              (d.push(`${r}#${e}`),
                              (o[`${r}#${e}`] = n.innerHTML)))
                        : (d.push(`!X!Y!Z!#${e}`),
                          (o[`!X!Y!Z!#${e}`] = n.innerHTML))
            }
            const p = e.classList.contains('punct-sort'),
                y = e.classList.contains('alpha-sort')
            function h(e, t) {
                return e.includes('!X!Y!Z!#')
                    ? 1
                    : t.includes('!X!Y!Z!#')
                    ? -1
                    : e.localeCompare(
                          t,
                          navigator.languages[0] || navigator.language,
                          { numeric: !y, ignorePunctuation: !p }
                      )
            }
            function L(e, t) {
                return h(t, e)
            }
            function g(t) {
                a &&
                    (!(function (t = '▲', n = '▼') {
                        ;(e.innerHTML = e.innerHTML.replace(t, '')),
                            (e.innerHTML = e.innerHTML.replace(n, ''))
                    })(s, c),
                    e.insertAdjacentText('beforeend', t))
            }
            function T(e) {
                d.sort(e, { numeric: !y, ignorePunctuation: !p })
            }
            void 0 !== d[0] &&
                (1 === u
                    ? i
                        ? (g(c), T(L))
                        : (g(s), T(h))
                    : 2 === u && ((u = 0), i ? (g(s), T(h)) : (g(c), T(L))))
        }
        e.addEventListener('click', function () {
            const [i, a, s] = [[], {}, {}],
                c = Array.prototype.filter.call(
                    n.querySelectorAll('tr'),
                    (e) => 'none' !== e.style.display
                ),
                m = e.classList.contains('data-sort')
            m &&
                (function (e, n) {
                    for (let [l, r] of e.entries()) {
                        const e = r.querySelectorAll('td').item(t).dataset.sort
                        n.push(`${e}#${l}`), (o[n[l]] = r.innerHTML)
                    }
                })(c, i)
            const b = e.classList.contains('file-size-sort')
            b &&
                (function (e, n) {
                    let o = {
                        b: 1,
                        kb: 1e3,
                        kib: 1024,
                        mb: 1e6,
                        mib: 2 ** 20,
                        gb: 1e9,
                        gib: 2 ** 30,
                        tb: 1e12,
                        tib: 2 ** 40,
                    }
                    const l = /([.0-9]+)\s?(B|KB|KiB|MB|MiB|GB|GiB|TB|TiB)/i
                    for (let [r, i] of e.entries()) {
                        let e = i
                            .querySelectorAll('td')
                            .item(t)
                            .textContent.match(l)
                        if (e) {
                            let t = parseFloat(e[1]),
                                l = o[e[2].toLowerCase()]
                            n.push(`${t * l}#${r}`)
                        } else n.push(`!X!Y!Z!#${r}`)
                    }
                })(c, i)
            r.classList.contains('remember-sort') ||
                (function (e, n) {
                    n.push(t),
                        1 === e &&
                            n.length > 1 &&
                            n[n.length - 1] !== n[n.length - 2] &&
                            ((e = 0), n.shift())
                })(u, d),
                (u += 1),
                (function (e, t, n) {
                    e.querySelectorAll('th').forEach((e, o) => {
                        ;(t[o] = e.colSpan),
                            (n[o] = 0 === o ? e.colSpan : n[o - 1] + e.colSpan)
                    })
                })(r, a, s)
            const S = {
                tableRows: c,
                columnData: i,
                isFileSize: b,
                isDataAttribute: m,
                colSpanData: a,
                colSpanSum: s,
            }
            f(S),
                (function (e) {
                    const { tableRows: n, columnData: r, isFileSize: i } = e
                    for (let [e, a] of n.entries())
                        if (i) {
                            a.innerHTML = l[r[e]]
                            let n = a.querySelectorAll('td').item(t).innerHTML
                            const o = a.querySelectorAll('td').item(t)
                                .textContent
                            r[e] = r[e].replace(/#[0-9]*/, '')
                            const i = parseFloat(r[e])
                            let s = ['', 'Ki', 'Mi', 'Gi', 'Ti', 'Pi'],
                                c = !1
                            for (let e = 0; e < s.length; ++e)
                                if (i < 2 ** (10 * (e + 1))) {
                                    let t = 2 ** (10 * e)
                                    ;(n = n.replace(
                                        o,
                                        `${(i / t).toFixed(2)} ${s[e]}B`
                                    )),
                                        (c = !0)
                                    break
                                }
                            c || (n = n.replace(o, 'NaN')),
                                (a.querySelectorAll('td').item(t).innerHTML = n)
                        } else i || (a.innerHTML = o[r[e]])
                })(S)
        })
    }
}
'complete' === document.readyState || 'interactive' === document.readyState
    ? tableSortJs()
    : 'loading' === document.readyState &&
      document.addEventListener('DOMContentLoaded', tableSortJs, !1),
    'object' == typeof module && (module.exports = tableSortJs)
//# sourceMappingURL=/sm/c25fc92dc5da24d2f3e2388211fce0f107b0c55aba6d6f3b36c609981065398c.map
