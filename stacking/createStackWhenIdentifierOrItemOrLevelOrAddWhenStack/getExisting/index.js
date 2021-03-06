// Copyright (c) 2019 Graham Dyson. All Rights Reserved. Licensed under the MIT license. See LICENSE file in the repository root for full license information.

import "core-js/features/array/flat";

import filterIdentifierOrItemOrLevelOrStack from "./filterIdentifierOrItemOrLevelOrStack";
import getIdentifierOrIdentifierOfItem from "../getIdentifierOrIdentifierOfItem";
import getIdentifiersInTargetLevelOrStack from "./getIdentifiersInTargetLevelOrStack";
import getStackOrSingleLevelOrSingleItem from "../getStackOrSingleLevelOrSingleItem";

export default ({
	identifierOrItemOrLevelOrStack,
	targetLevelOrStack,
}) =>
	identifierOrItemOrLevelOrStack
	&&
	getStackOrSingleLevelOrSingleItem(
		filterIdentifierOrItemOrLevelOrStack({
			identifierOrItemOrLevelOrStack,
			identifierOrItemPredicate:
				withTargetIdentifiers(
					new Set(
						getIdentifiersInTargetLevelOrStack(
							targetLevelOrStack,
						),
					),
				)
				.isIdentifierOrItemIncluded,
		}),
	);

function withTargetIdentifiers(
	targetIdentifiers,
) {
	return { isIdentifierOrItemIncluded };

	function isIdentifierOrItemIncluded(
		identifierOrItem,
	) {
		return (
			isIdentifierNotInTarget(
				getIdentifierOrIdentifierOfItem(
					identifierOrItem,
				),
			)
		);
	}

	function isIdentifierNotInTarget(
		identifier,
	) {
		return (
			identifier === "existing"
			||
			!targetIdentifiers.has(identifier)
		);
	}
}