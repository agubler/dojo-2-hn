import { Container } from '@dojo/widget-core/Container';
import { Context } from './../Context';
import { Comments, CommentsProperties } from './../widgets/Comments';

function getProperties(context: Context, properties: CommentsProperties): CommentsProperties {
	const { id } = properties;
	if (id !== context.itemId) {
		context.fetchItem(id);
	}

	return {
		item: context.item,
		id
	};
}

export const CommentsContainer = Container(Comments, 'state', { getProperties });
