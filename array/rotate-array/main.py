class Solution(object):
    def rotate(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: None Do not return anything, modify nums in-place instead.
        """
        l = len(nums)
        k %= l;
        if k != 0:
            nums[:k], nums[k:] = nums[-k:] = nums[:-k]
        
