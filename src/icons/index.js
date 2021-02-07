import SvgIcon from '@/components/tools/SvgIcon' // svg组件

const req = require.context('./', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)

export default {
    install: (app) => {
        app.component("SvgIcon", SvgIcon)
    }
}