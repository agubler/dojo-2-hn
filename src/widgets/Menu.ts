import { WidgetBase } from '@dojo/widget-core/WidgetBase';
import { v, w } from '@dojo/widget-core/d';
import { theme, ThemeableMixin } from '@dojo/widget-core/mixins/Themeable';
import { Link } from '@dojo/routing/Link';

import { MenuItem } from './MenuItem';
import * as css from './styles/menu.m.css';

const categories = [ 'top', 'new', 'show', 'ask', 'jobs' ];

interface MenuProperties {
	onCategoryChange: Function;
	category: string;
}

@theme(css)
export class Menu extends ThemeableMixin(WidgetBase)<MenuProperties> {

	private _onHomeClick = () => {
		this.properties.onCategoryChange('top');
	}

	render() {
		const { onCategoryChange, category = '' } = this.properties;

		return v('nav', { classes: this.classes(css.root) }, [
			w(Link, { to: 'menu', params: { category: 'top' }, classes: this.classes(css.home), onClick: this._onHomeClick }, [
				v('img', { classes: this.classes(css.logo), src: './img/logo2.svg' })
			]),
			v('ol', { classes: this.classes(css.menuContainer) }, [ ...categories.map((cat) => {
				return w(MenuItem, {
					key: cat,
					onSelectedMenuItem: onCategoryChange,
					selected: cat === category,
					cat
				}, [ cat ])
			})])
		]);
	}
}
