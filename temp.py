import json

def find_max(nums):
    max_val = nums[0]

    for num in nums:
        if num > max_val:
            max_val = num

    return max_val

def run_tests():
    try:
        test_cases = json.loads('''[{"input":[[2,7,11,15],9],"expected":[0,1]},{"input":[[3,2,4],6],"expected":[1,2]}]''')
        results = []

        for test in test_cases:
            result = two_sum(*test['input'])
            results.append(result == test['expected'])

        print(results)

    except Exception as e:
        print('ERROR:', str(e))

run_tests()