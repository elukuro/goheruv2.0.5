const articleList = [
'34-how-to-deal-with-imposter-syndrom',
'33-how-to-handle-boring-developer-job',
'32-how-to-remove-unwanted-files-in-a-commit',
'31-how-to-get-object-values-without-iterating',
'30-primitive-value-and-non-primitive-value',
'29-bind-call-apply-in-javascript',
'28-object-constructor-in-javascript',
'27-javascript-object',
'26-closure',
'25-asynchronous-javascript',
'24-class-javascript',
'23-how-to-destructure-object-and-make-alias-for-some-key-name',
'22-hoisting-javascript',
'21-type-of-function',
'20-wierd-javascript',
'19-clean-code-tips-conditional',
'18-clean-code-tips-function',
'17-clean-code-tips-variable',
'16-converting-number-without-parseInt',
'15-conditionally-calling-function',
'14-optional-chaining',
'13-dont-do-this-a-guide-not-to-curse-by-other-developer',
'12-how-to-clone-object-except-one-or-some-keys',
'11-functional-or-class-component',
'10-react-effect-hook-easy-way',
'09-react-state-hook-easy-way',
"08-don't-use-float",
'07-how-to-duplicate-array',
'06-some-git-command-that-might-you-dont-know',
'05-no-undefined-value-pass-in-your-functions-anymore',
'04-how-to-shorten-if-else-statment',
'03-unique-array',
'02-how-to-switch-value',
'01-use-no-var-anymore',
].reverse()

export const articleListData = (reverse = true) => {
  if(reverse){
    return [...articleList].reverse()
  }
  return [...articleList]
}

