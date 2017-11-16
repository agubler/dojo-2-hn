import { Link } from '@dojo/routing/Link';
import { v, w } from '@dojo/widget-core/d';
import { WidgetBase } from '@dojo/widget-core/WidgetBase';

import { ArticleItem } from './../interfaces';

import * as css from './styles/article.m.css';

export interface ArticleProperties {
	item?: ArticleItem;
	index: number;
	pageNumber: number;
}

export class Article extends WidgetBase<ArticleProperties> {

	private _articleShell() {
		const percent = Math.floor(Math.random() * 20 + 80);
		return [
			v('h2', { styles: { width: `${percent}%` }, classes: [ css.titleShell, css.animatedTitle ] } ),
			v('p', { classes: [ css.subtitleShell, css.animatedSubTitle ] })
		];
	}

	private _renderArticle(article: ArticleItem) {
		const { url, title, points, user, id, comments_count, time_ago } = article;
		const commentText = comments_count === 0 ? 'discuss' : `${comments_count} comments`;

		return [
			v('h2', { classes: css.title, styles: {} }, [
				v('a', {
					href: url,
					target: 'none'
				}, [ title ])
			]),
			v('p', { classes: css.details }, [
				v('span', { key: 'points' }, [ `${points || 0} points ${user ? 'by ' : ''}` ]),
				user ? w(Link, {
					key: 'user',
					to: 'user',
					params: { user },
					classes: css.link
				}, [
					user
				]) : null,
				v('span', { key: 'time-ago'}, [ ` ${time_ago} ` ]),
				w(Link, {
					key: 'comments',
					to: 'comments',
					params: { id: `${id}` },
					classes: css.link
				}, [ commentText ])
			])
		];

	}

	protected render() {
		const { item, index, pageNumber } = this.properties;
		const articleNumber = `${(pageNumber - 1) * 30 + index + 1}`;

		return v('article', { classes: css.root }, [
			v('span', { classes: css.pageNumber }, [ articleNumber ]),
			v('div', {
				key: index,
				classes: css.post
			}, item ? this._renderArticle(item) : this._articleShell())
		]);
	}

}
