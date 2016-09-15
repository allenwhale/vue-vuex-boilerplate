import VueSideEffect from 'vue-side-effect'

const sideEffect = new VueSideEffect({
    reducePropsToState (propsList) {
        var innermostProps = propsList[propsList.length - 1]
        if (innermostProps) {
            return innermostProps.title
        }
    },
    handleStateChangeOnClient (title) {
        var nextTitle = title || ''
        if (nextTitle !== document.title) {
            document.title = nextTitle
        }
    }
})

export default {
    sideEffect: sideEffect,
    name: 'DocumentTitle',
    props: {
        title: {
            type: String,
            required: true
        }
    },
    render (h) {
        return h('div', this.$slots.default)
    }
}
